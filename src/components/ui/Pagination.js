import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pageSelected } from "../../features/filter/filterSlice";

export default function Pagination({ pageCount }) {
    const dispatch = useDispatch()
    const { pageNumber } = useSelector((state) => state.filter);
    const pageArray = []
    for (let index = 0; index < pageCount; index++) {
        pageArray.push(index)
    }
    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {pageArray.map((item) => (<div onClick={() => dispatch(pageSelected(item + 1))} key={item} className={`cursor-pointer rounded-full py-1 px-4 ${pageNumber === item + 1 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"}`}>
                    {item + 1}
                </div>))}
            </div>
        </section>
    );
}
