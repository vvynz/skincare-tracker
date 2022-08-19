import { Tr, Th, Input, Button, Checkbox } from "@chakra-ui/react";

export default function InUseEditable({ editFormData, handleEditFormChange, cancel, toggleRepurchase }) {
  return (
    <Tr>
      <Th>
        <Input name="itemName" value={editFormData.itemName} required="required" onChange={handleEditFormChange} />
      </Th>
      <Th>
        <Input type="date" name="dateOpened" value={editFormData.dateOpened.toLocaleDateString} required="required" onChange={handleEditFormChange} />
      </Th>
      <Th>
        <Input type="date" name="expiryDate" value={editFormData.expiryDate.toLocaleDateString} required="required" onChange={handleEditFormChange} />
      </Th>
      <Th>
        <Checkbox colorScheme="purple" spacing="1rem" isChecked={editFormData.repurchase}>Yes</Checkbox>
      </Th>
      <Th>
        <Button type="submit" size="xs" colorScheme="purple" variant="outline" >Save</Button>
        <Button size="xs" colorScheme="purple" variant="outline" onClick={cancel} >Cancel</Button>
      </Th>
    </Tr>
  );
}
