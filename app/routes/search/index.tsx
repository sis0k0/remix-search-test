import { Form, LoaderFunction, useLoaderData, useSearchParams } from "remix";

export let loader: LoaderFunction = ({ request }) => {
    const url = new URL(request.url)
    const search = new URLSearchParams(url.search);
    console.log("Search in loader: ", search);

    // Replace with API call
    return ['doc1', 'doc2'];
};

export default function Search() {


    const [params] = useSearchParams();
    const data = useLoaderData();
    console.log('Data inside the component', data);

    return (
        <Form>
            Search for stuff...
            <input type="text" name="query" placeholder="Search tweets..." defaultValue={params?.get("query") || ""} />
        </Form>
    );
}
