const expr = require('express');
const path = require('path')
app = expr()

app.use(expr.static(path.join(__dirname,"pubsta")))

app.listen(5000, (err)=> {console.log(`server started 5000`)
})

