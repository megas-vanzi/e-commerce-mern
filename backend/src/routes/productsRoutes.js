import routerx from "express-promise-router";
import productsController from "../controllers/productsController";

const router = routerx();
const {
  add,
  queryById,
  queryByName,
  list,
  update,
  upload,
  remove,
  activate,
  deactivate,
  addCategory,
  removeCategory,
} = productsController;

router.post("/add", add);

router.get("/query/:id", queryById);

router.get("/query-name/:name", queryByName);

router.get("/list", list);

router.put("/update", update);

router.post("/upload", upload);

router.put("/add-category", addCategory);

router.put("/remove-category", removeCategory);

router.delete("/remove", remove);

router.put("/activate", activate);

router.put("/deactivate", deactivate);

export default router;
