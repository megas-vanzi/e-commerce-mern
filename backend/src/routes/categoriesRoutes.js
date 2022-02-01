import routerx from "express-promise-router";
import categoriesController from "../controllers/categoriesController";

const router = routerx();
const {
  add,
  addProduct,
  removeProduct,
  queryById,
  queryByName,
  list,
  update,
  remove,
  activate,
  deactivate,
} = categoriesController;

router.post("/add", add);

router.get("/query/:id", queryById);

router.get("/query-name/:name", queryByName);

router.get("/list", list);

router.put("/update", update);

router.put("/add-product", addProduct);

router.put("/remove-product", removeProduct);

router.delete("/remove", remove);

router.put("/activate", activate);

router.put("/deactivate", deactivate);

export default router;
