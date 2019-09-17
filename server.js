app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(4000, () => {
  console.log('Listening');
});
