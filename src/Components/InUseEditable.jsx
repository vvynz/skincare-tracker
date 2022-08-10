import { Tr, Th, Input, Button } from "@chakra-ui/react";

export default function InUseEditable({ editFormData, handleEditFormChange, cancel }) {
  return (
    <Tr>
      <Th>
        <Input name="itemName" value={editFormData.itemName} required="required" onChange={handleEditFormChange} />
      </Th>
      <Th>
        <Input type="date" value={editFormData.dateOpened.toLocaleDateString} required="required" onChange={handleEditFormChange} />
      </Th>
      <Th>
        <Input type="date" value={editFormData.expiryDate.toLocaleDateString} required="required" onChange={handleEditFormChange} />
      </Th>
      <Th>
        <Button size="xs" colorScheme="purple" variant="outline" onClick={cancel} >Cancel</Button>
      </Th>
    </Tr>
  );
}
