const file=require('fs')
var value=require('./question')
var val=value.data("what is ur proffesion ?","a)developer  b)trainer  c)student","Developer")
//file.appendFile('question.json',(`question-1:${val.Questions}`),(err)=>{if (err) throw err;});
file.writeFileSync("question.json",`{"question" : "${val.Questions}","options" :"${val.choice}","Result" :"${val.Result}"}`)