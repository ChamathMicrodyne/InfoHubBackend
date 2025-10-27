import SocialMediaLinksItems from "../modal/SocialMediaLinksItems.js";

export async function saveItems(req, res) {
  const lastID = await SocialMediaLinksItems.findOne().sort({ id: -1 });
  const newId = lastID && lastID.id ? lastID.id + 1 : 1;

  const item = new SocialMediaLinksItems({
    id: newId,
    name: req.body.name,
    active: req.body.active
  });

  item
    .save()
    .then(() => {
      res.json({
        message: "item save successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "item add failed",
      });
    });
}

export async function getItems(req, res) {
  try {
    const items = await SocialMediaLinksItems.find();
    res.json(items);
  } catch (err) {
    res.json({
      message: "Failed to get items",
      error: err,
    });
  }
}

export async function updateItems(req, res) {
  const itemId = req.params.itemId;
  const updatingData = req.body;

  try {
    const updatedItem = await SocialMediaLinksItems.findOneAndUpdate(
      { id: itemId },
      updatingData,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    // Fetch the full updated dashboard list
    const allItems = await SocialMediaLinksItems.find().sort({ id: 1 });

    // Broadcast to WebSocket clients
    if (req.wss) {
      req.wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
          client.send(JSON.stringify({
            type: 'socialmedialinksUpdate',
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
    console.error("Error updating dashboard item:", err);
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
}