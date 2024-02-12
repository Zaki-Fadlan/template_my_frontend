import { title } from "@/components/primitives";
import DataTables from "@/components/table/DataTables";
export default function ExamplePage() {
  return (
    <div>
      <h1 className={title({ size: "sm" })}>Example</h1>
      <DataTables />
    </div>
  );
}
