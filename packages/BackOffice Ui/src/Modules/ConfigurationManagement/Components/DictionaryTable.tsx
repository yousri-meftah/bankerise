import SharedTable from "./sharedTable";
import { Dictionary } from "../utils/constants";

const columns = [
  { key: "Code"},
  { key: "Content"},
  { key: "Category" },
  { key: "Action"}
];

export default function DictionaryTable() {

    return (
        <>
            <SharedTable data={Dictionary} columns={columns} />

        </>
    )
}
