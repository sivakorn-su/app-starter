export default {
    contact: {
        form: {
            title: 'Create Contact',
            name: {
                label: 'Full Name',
                placeholder: 'Enter full name',
            },
            age: {
                label: 'Age',
                placeholder: 'Enter age',
            },
            validation: {
                name_required: 'Full Name is required',
                name_invalid: 'Only letters and spaces allowed',
                age_required: 'Age is required',
                age_invalid: 'Enter a valid age (1-120)',
            }
        },
        list: 'Contact List',
        search_placeholder: "Search by name...",
        table: {
            id: 'ID',
            name: 'Name',
            age: 'Age',
        },
        success_message: "Contact Added Successfully!",
        error_message: "Submission Failed!",
        go_to_list: "Go to Contact List"
    }, common: {
        submit: "Submit",
        try_again: "Try Again",
        clear: "Clear",
        add_people: "Add people",
        no_data: "No one here!"
    },
}
