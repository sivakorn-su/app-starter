export default {
    contact: {
        form: {
            title: 'สร้างผู้ติดต่อ',
            name: {
                label: 'ชื่อ-นามสกุล',
                placeholder: 'กรอกชื่อ-นามสกุล',
            },
            age: {
                label: 'อายุ',
                placeholder: 'กรอกอายุ',
            },
            validation: {
                name_required: 'ชื่อเต็มเป็นสิ่งที่จำเป็น',
                name_invalid: 'อนุญาตให้กรอกเฉพาะตัวอักษรและช่องว่าง',
                age_required: 'อายุเป็นสิ่งที่จำเป็น',
                age_invalid: 'กรุณากรอกอายุที่ถูกต้อง (1-120)',
            }
        },
        list: 'รายชื่อผู้ติดต่อ',
        search_placeholder: "ค้นหาด้วยชื่อ...",
        success_message: "เพิ่มผู้ติดต่อสำเร็จ!",
        error_message: "เกิดข้อผิดพลาดในการส่งข้อมูล!",
        go_to_list: "ไปที่รายชื่อผู้ติดต่อ",
        table: {
            id: 'รหัส',
            name: 'ชื่อ',
            age: 'อายุ',
        },
    },
    common: {
        submit: "ส่งข้อมูล",
        try_again: "ลองใหม่",
        clear: "ล้างค่า",
        add_people: "เพิ่มรายชื่อ",
        no_data: "ไม่มีข้อมูล!"
    },
}
