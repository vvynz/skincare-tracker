import { Tr, Th, Input, Button } from "@chakra-ui/react";

export default function InUseEditable({ editFormData, cancel }) {
  return (
    <Tr>
      <Th>
        <Input name="itemName" value={editFormData.itemName} required="required" />
      </Th>
      <Th>
        <Input type="date" value={editFormData.dateOpened.toLocaleDateString} required="required" />
      </Th>
      <Th>
        <Input type="date" value={editFormData.expiryDate.toLocaleDateString} required="required" />
      </Th>
      <Th>
        <Button size="xs" colorScheme="purple" variant="outline" onClick={cancel} >Cancel</Button>
      </Th>
    </Tr>
  );
}
