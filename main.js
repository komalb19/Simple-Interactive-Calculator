function add() {
    var a=0, b=0;
    a= result.input.value;
    b= a.charAt(a.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*') {
        result.input.value=a.substring(0,a.length-1);
        result.input.value+='+';
    }
    else{ result.input.value+='+'}
    }

    function sub() {
        var a=0, b=0;
        a= result.input.value;
        b= a.charAt(a.length-1);
        if(b=='+' || b=='-' || b=='/' || b=='*') {
            result.input.value=a.substring(0,a.length-1);
            result.input.value+='-';
        }
        else{ result.input.value+='-'}
        }
    
        function div() {
            var a=0, b=0;
            a= result.input.value;
            b= a.charAt(a.length-1);
            if(b=='+' || b=='-' || b=='/' || b=='*') {
                result.input.value=a.substring(0,a.length-1);
                result.input.value+='/';
            }
            else{ result.input.value+='/'}
            }

            function mul() {
                var a=0, b=0;
                a= result.input.value;
                b= a.charAt(a.length-1);
                if(b=='+' || b=='-' || b=='/' || b=='*') {
                    result.input.value=a.substring(0,a.length-1);
                    result.input.value+='*';
                }
                else{ result.input.value+='*'}
                }
            
        
