import AddItemForm from "@/components/AddItemForm";

export default function AddItemPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="mb-2 text-3xl font-semibold text-gray-900">
          Add New Item
        </h1>
        <p className="mb-8 text-gray-500">
          Fill in the details below to add a new product
        </p>

        <AddItemForm />
      </div>
    </div>
  );
}
