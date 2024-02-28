import BlogEntry from "./BlogEntry";

export default function PostList({ data, extract }) {
    return (<section className="flex flex-wrap flex-col gap-2">
        {Array.isArray(data) ? data.map((blogentry, key) =>
            <BlogEntry key={key} {...blogentry} extract={extract} />
        ) : null}
    </section>
    )
}