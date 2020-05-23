function mostrar_esconder(sel) {
    var value = sel.value;     
    if(value==="escolha_prim"){
        document.getElementById('mf_multi').style.height = "3400px";  
        document.getElementById('primeira').style.display = 'block';
        document.getElementById('segunda').style.display = 'none';       
        document.getElementById('terceira').style.display = 'none';
    }
    if(value==="escolha_seg"){
        document.getElementById('mf_multi').style.height = "2050px";  
        document.getElementById('primeira').style.display = 'none';
        document.getElementById('segunda').style.display = 'block';
        document.getElementById('terceira').style.display = 'none';       
    }
    if(value==="escolha_ter"){
        document.getElementById('mf_multi').style.height = "3400px";  
        document.getElementById('primeira').style.display = 'none';
        document.getElementById('segunda').style.display = 'none';
        document.getElementById('terceira').style.display = 'block';       
    }
    if(value==="escolha"){
        document.getElementById('mf_multi').style.height = "700px";  
        document.getElementById('primeira').style.display = 'none';
        document.getElementById('segunda').style.display = 'none';       
        document.getElementById('terceira').style.display = 'none';       
    }
}