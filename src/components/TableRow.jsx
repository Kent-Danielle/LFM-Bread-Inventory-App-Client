import { Tr, Td, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ModalContext } from "./Home";
import { useContext } from "react";

function TableRow(props) {
	const { toggleDeleteModal, toggleEditModal } = useContext(ModalContext);
	return (
		<Tr>
			<Td>
				<Menu>
					<MenuButton textDecor={"underline"}>{props.breadName}</MenuButton>
					<MenuList zIndex={"999"}>
						<MenuItem
							onClick={() => {
								toggleEditModal(props.data);
							}}
						>
							Edit Bread
						</MenuItem>
						<MenuItem
							onClick={() => {
								toggleDeleteModal(props.data);
							}}
							color={"red.500"}
						>
							Delete Bread
						</MenuItem>
					</MenuList>
				</Menu>
			</Td>

			<Td isNumeric>{props.sundayOrder}</Td>
			<Td isNumeric>{props.mondayOrder}</Td>
			<Td isNumeric>{props.tuesdayOrder}</Td>
			<Td isNumeric>{props.wednesdayOrder}</Td>
			<Td isNumeric>{props.thursdayOrder}</Td>
			<Td isNumeric>{props.fridayOrder}</Td>
			<Td isNumeric>{props.saturdayOrder}</Td>
		</Tr>
	);
}

export default TableRow;
