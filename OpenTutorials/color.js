var Links = {
    setColor : function (color) {
        var links = document.querySelectorAll('a');
        for(var i=0; i<links.length; i++) {
            links[i].style.color = color;
        }
    }
}

var Body = {
    setColor : function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');

    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('powderblue');
    }
}