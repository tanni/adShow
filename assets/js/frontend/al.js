function addScript(m,nid){
    url = '/api/log/al/id/'+did+'/nid/'+nid+'/m/'+m;
    var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src',url);
    document.getElementsByTagName('head')[0].appendChild(script);
}