import CustomerTable from "@/components/customer-table/CustomerTable"

export default function CustomerManagement() {

    const customers = [
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Vasilia",
            contact: "000666000",
            company: "Tech service",
            designation: "UI/UX Designer",
            type: "Office",
            status: "Permanent"
        },
        {
            name: "Dina",
            contact: "000666000",
            company: "Tech service",
            designation: "PHP Developer",
            type: "Remote",
            status: "Permanent"
        },
        {
            name: "Jack",
            contact: "000666000",
            company: "Tech service",
            designation: "Sales Manager",
            type: "Office",
            status: "Permanent"
        }
    ]

    return (
        <div className="h-full flex-1 flex items-center justify-center">
            <CustomerTable data={customers} />
        </div>
    )
}