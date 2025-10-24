import BenefitsContentItems from "../modal/BenefitsContentItems.js";

export async function saveItems(req, res) {
  const lastID = await BenefitsContentItems.findOne().sort({ id: -1 });
  const newId = lastID && lastID.id ? lastID.id + 1 : 1;

  const item = new BenefitsContentItems({
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
    const items = await BenefitsContentItems.find();
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
    await BenefitsContentItems.updateOne({ id: itemId }, updatingData);

    res.json({
      message: "item updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
    return;
  }
}
