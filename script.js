    var frm=document.createElement('form');
    var div=document.createElement('div');
    var lbl1=createnewele('label','First Name','fname');
    var in1=createnewele('input','Your First Name..','fname');
    var lbl2=createnewele('label','Middle Name','mname');
    var in2=createnewele('input','Your Middle Name..','mname');
    var lbl3=createnewele('label','Last Name','lname');
    var in3=createnewele('input','Your Last Name..','lname');
    var lbl4=createnewele('label','email','email');
    var in4=createnewele('input','eg:abc@gmail.com','email');
    var btn=createnewele('input','Submit','submit');
    frm.append(div);
    document.body.append(frm);
//-------------------------------------------------------------------------------
    
   function createnewele(tag,value="",id)
    {
        var el=document.createElement(tag);
        
        if(tag==='label')
        {
            el.setAttribute('for',id);
            el.innerText=value;
        }
            
        else
        {
            if(value==="Submit")
            {   div.append(document.createElement('br'));
                el.setAttribute('id',id);
                el.setAttribute('type','button');
                el.setAttribute('value',value);
                el.setAttribute('onclick','display()');
            }
            else
            {
                el.setAttribute('id',id);
                el.setAttribute('type','text');
                el.setAttribute('placeholder',value);
            }   
        } 
        
        div.append(el);
        div.append(document.createElement('br'));
        return el
    }
//-------------------------------------------------------------------------------

function display()
{
 var fname=document.getElementById('fname').value;
 var mname=document.getElementById('mname').value;
 var lname=document.getElementById('lname').value;
 var email=document.getElementById('email').value;
 console.log(`Entered First Name is : ${fname}`);
 console.log(`Entered Middle Name is : ${mname}`);
 console.log(`Entered Last Name is : ${lname}`);
 console.log(`Entered Email is : ${email}`);
}