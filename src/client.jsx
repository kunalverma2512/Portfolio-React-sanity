import { createClient } from "@sanity/client"

const client = createClient({
    projectId: "630r8ztp",
    dataset: "production",
});

export default client