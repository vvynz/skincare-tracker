import { Tr, Td, Input, Button, Checkbox } from "@chakra-ui/react";

export default function InUseEditable({
  editFormData,
  handleEditFormChange,
  cancel,
}) {
  return (
    <Tr>
      <Td>
        <Input
          name="brand"
          value={editFormData.brand}
          onChange={handleEditFormChange}
        />
      </Td>
      <Td>
        <Input
          name="itemName"
          value={editFormData.itemName}
          required="required"
          onChange={handleEditFormChange}
        />
      </Td>
      <Td>
        <Input
          type="date"
          name="dateOpened"
          value={editFormData.dateOpened.toLocaleDateString}
          required="required"
          onChange={handleEditFormChange}
        />
      </Td>
      <Td>
        <Input
          type="date"
          name="expiryDate"
          value={editFormData.expiryDate.toLocaleDateString}
          required="required"
          onChange={handleEditFormChange}
        />
      </Td>
      <Td>
        <Checkbox colorScheme="purple" spacing="1rem" isDisabled>
          Yes
        </Checkbox>
      </Td>
      <Td>
        <Button type="submit" size="xs" colorScheme="purple" variant="outline">
          Save
        </Button>
        <Button
          size="xs"
          colorScheme="purple"
          variant="outline"
          onClick={cancel}
        >
          Cancel
        </Button>
      </Td>
    </Tr>
  );
}
