({
    doInit : function(component, event, helper) {
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        if (typeof userId === "undefined") {
            component.set('v.hideHome', true);
        }
    }
})