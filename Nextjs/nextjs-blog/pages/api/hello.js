// Never fetch an API route from getStaticProps or getStaticPaths
// Good use case: handle form input

// export default function handler(req, res) {
//     const email = req.body.email
//     // Then save email to your database, etc...
// }

export default function handler(req, res) {
    res.status(200).json({text: 'Hello'})
}