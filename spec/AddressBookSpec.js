describe("AddressBook", function () {
    
    it("should be able to add a contract", function () {
        var addressBook = new AddressBook(),
            contact = new Contact();
            
        addressBook.addContact(contact);
        
        expect(addressBook.getContact(0)).toBe(contact);
    });
    
});