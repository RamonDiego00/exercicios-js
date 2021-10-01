export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id:codigo,
        nome: `Ramon ${codigo}`,
        email: `ramondiego${codigo}@gmail.com`
    })
}