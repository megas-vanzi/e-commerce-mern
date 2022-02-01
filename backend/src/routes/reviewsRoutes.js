import routerx from "express-promise-router";
import reviewsController from "./../controllers/reviewsController";

const router = routerx();
const { add, list, query, update, remove, activate, deactivate } =
  reviewsController;

router.post("/add", add);

router.get("/list", list);

router.get("/query/:id", query);

router.put("/update", update);

router.put("/activate", activate);

router.put("/deactivate", deactivate);

router.delete("/remove", remove);

export default router;
