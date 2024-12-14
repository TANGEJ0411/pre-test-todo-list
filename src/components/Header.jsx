import Icon from "@mdi/react"
import { mdiCogOutline, mdiMenu } from '@mdi/js';
import { COLOR, ICON_SIZE } from "../utils/type";
import { useTodoContext } from "../context/useTodoContext";

function Header() {

  const {translate} = useTodoContext();

  return (
    <div className="fixed top-0 w-full bg-primary flex justify-between justify-items-center p-3">
        <div className="flex justify-items-center">
            <Icon path={mdiMenu} size={ICON_SIZE.LARGE} color={COLOR.SECONDARY} />
            <p className="text-secondary mx-3 flex items-center">{translate("TODO_LIST")}</p>
        </div>
        <Icon path={mdiCogOutline} size={ICON_SIZE.LARGE} color={COLOR.SECONDARY} />
    </div>
  )
}

export default Header