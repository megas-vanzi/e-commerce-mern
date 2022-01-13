import routerx from "express-promise-router";
import cartController from "../controllers/cartController";

const router = routerx();

router.post("/:idUser", cartController.addCart);

router.get("/:idUser", cartController.listCart);

router.put("/:idUser", cartController.editCart);

router.delete("/:idUser", cartController.deleteCart);

export default router;
