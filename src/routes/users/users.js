const handlers = ({ axios })  => ({
    get : async (req, res) => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

        res.status(200).json({
            data
          });
    },

    post: async (req, res) => {
        const { body } = req.params;
        const { data } = await axios.post(`https://jsonplaceholder.typicode.com/posts/`, body);

        res.status(201).json({
            data
          });
    },

    patch : async (req, res) => {
        const { id } = req.params;
        const { body } = req.params;

        const { data } = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, body);

        res.sendStatus(204);
    },

    delete : async (req, res) => {
    const { id } = req.params;

    const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    res.sendStatus(204);
},
})

export { handlers as users };
