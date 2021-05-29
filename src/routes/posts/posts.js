const posts = ({ axios })  => ({
    // get : async (req, res) => {
    //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

    //     res.status(200).json({
    //         data
    //       });
    // },

    post: async (req, res) => {
      const { body } = req;

      const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');

      const found = users.find(element => element.id === body.id);

      if (found){
        const { data } = await axios.post(`https://jsonplaceholder.typicode.com/posts/`, body);

        return res.status(201).json({
            data
        });
      }

      return res.sendStatus(400);

    },

    // patch : async (req, res) => {
    //     const { id } = req.params;
    //     const { body } = req.params;

    //     const { data } = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, body);

    //     res.sendStatus(204);
    // },

    // delete : async (req, res) => {
    //     const { id } = req.params;

    //     const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    //     res.sendStatus(204);
    // },
})

export { posts };
