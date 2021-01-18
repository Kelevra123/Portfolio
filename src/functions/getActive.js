export default function getActive(e, value) {
    const activeClass = 'active btn button primary-button text-uppercase ml-4 mr-2'
    const dClass = 'btn button secondary-button text-uppercase'

    const filtred = e.target.parentElement.nextSibling.children
    for (let i=0; i<filtred.length; i++) {
        if (filtred[i].className.includes(value)) {
            const oldClass = filtred[i].className.replace(' dn', '')
            filtred[i].className = oldClass
        } else {
            if (filtred[i].className.includes(' dn')) {

            } else {
                filtred[i].className = filtred[i].className + ' dn'
            }
            
        }
        if (value === 'all') {
            const oldClass = filtred[i].className.replace(' dn', '')
            filtred[i].className = oldClass
        }
    }

    if (e.target.className.includes('primary-button')) {
        return;
    } else {
        for (let i=0; i < e.target.parentElement.children.length; i++) {
            e.target.parentElement.children[i].className = dClass;
        }
        e.target.className = activeClass;
    }
}
