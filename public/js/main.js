const mainTitle = document.querySelector('.main_title');
const formEl = document.querySelector('form');
const input = document.querySelector('.input');
let titleLi;
let titleName;
let textName;
let arrdata;
let li;
let titleText;
let limitted;

const item = async () => {
    const result = await axios.get('/item')
}
item()

const items = async () => {
    arrdata = await axios.post('/items', { title: titleName, text: textName })
    render()
    console.log(arrdata.data)
}

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    titleName = formData.get('title')
    textName = formData.get('text')
    console.log(textName, titleName);
    items()
    
})



const render = () => {
    mainTitle.innerHTML = ''
    arrdata.data.forEach(item => {
        li = document.createElement('li');
        li.innerHTML = `<li class="title_title">${item.title}</li>
                        <div class="limitted">
                            <li class="title_text">${item.text}</li>
                            <div class="bottom"></div>
                        </div>
                        `
        mainTitle.appendChild(li)
    })

    changeNumber ();
    //search();
      
    };
     

    const changeNumber =  () => {
        let limitted = document.querySelectorAll('.limitted');
        for (let num = 0; num < limitted.length; num++) {
        
            limitted[num].addEventListener('click', (ev) => {
                limitted[num].classList.toggle('limittedadd');
                       
            })
            
        }
            console.log(limitted)
    }

    const search = () => {

        input.addEventListener('keyup', (ev) => {
   
            const itemLi = document.getElementsByClassName('title_title');
            console.log(itemLi)
            for(const element of itemLi) {
                if (!element.innerHTML.startsWith(ev.target.value)) {
                    element.classList.remove('hidden');
                }
                else {
                    element.classList.add('hidden');
                }
            }
        })
    }
    search()