import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login"
import { EquipmentDetailsPage } from "../pages/equipmentDetails"
import { ManageEquipmentPage } from "../pages/manageEquipment"
import { AddEquipmentPage } from "../pages/addEquipment"
import { AssignEquipmentPage } from "../pages/assignEquipment"

export const StoRRoutes = () => {
    return (
        <Routes>
            <Route
            path = "/"
            element = {<HomePage/>}
            />
             <Route
            path = "/login"
            element = {<LoginPage/>}
            />
            <Route
            path = "/equipmentdetails/:id"
            element = {<EquipmentDetailsPage/>}
            />
            <Route
            path = "/manageequipment"
            element = {<ManageEquipmentPage/>}
            />
            <Route
            path = "/addequipment"
            element = {<AddEquipmentPage/>}
            />
            <Route
            path = "/assignequipment"
            element = {<AssignEquipmentPage/>}
            />
            <Route
            path = "/manageassignment"
            element = {<ManageEquipmentPage/>}
            />
        </Routes>
    )
}
