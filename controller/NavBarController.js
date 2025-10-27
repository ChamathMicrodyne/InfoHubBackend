import NavBarItems from "../modal/NavBarItems.js";

export async function saveItems(req, res) {
  try {
    const lastID = await NavBarItems.findOne().sort({ id: -1 });
    const newId = lastID && lastID.id ? lastID.id + 1 : 1;

    const item = new NavBarItems({
      id: newId,
      name: req.body.name,
      active: req.body.active ?? true,
    });

    await item.save();
    res.status(201).json({
      message: "Item saved successfully",
      data: item,
    });
  } catch (err) {
    console.error('Error saving item:', err);
    res.status(500).json({
      message: "Item add failed",
      error: err.message,
    });
  }
}

export async function getItems(req, res) {
  try {
    const items = await NavBarItems.find().sort({ id: 1 });
    res.status(200).json(items);
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).json({
      message: "Failed to get items",
      error: err.message,
    });
  }
}

export async function updateItems(req, res) {
  const itemId = req.params.itemId;
  const updatingData = req.body;

  try {
    const updatedItem = await NavBarItems.findOneAndUpdate(
      { id: itemId },
      updatingData,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    // Fetch the full updated navbar list
    const allItems = await NavBarItems.find().sort({ id: 1 });

    // Broadcast to WebSocket clients
    if (req.wss) {
      req.wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
          client.send(JSON.stringify({
            type: 'navbarUpdate',
            data: allItems,
          }));
        }
      });
    }

    res.status(200).json({
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (err) {
    console.error('Error updating item:', err);
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
}