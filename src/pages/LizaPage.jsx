import {useState} from "react";

export default function LizaPage() {
    const [language, setLanguage] = useState('en')

    const content = {
        en: {
            title: 'Hi!🤚 I\'m Liza',
            description: 'It looks like you\'ve found my key.',
            value: 'Please contact me in any way that\'s convenient for you:'
        },
        thai: {
            title: 'สวัสดีค่ะ!🤚 ฉันชื่อลิซ่า',
            description: 'ดูเหมือนว่าคุณจะพบกุญแจของฉัน',
            value: 'กรุณาติดต่อฉันด้วยวิธีที่สะดวกสำหรับคุณ:'
        }
    }

    const handleClick = (way) => {
        switch (way) {
            case 'telegram':
                window.open('https://t.me/ElisabethMesh', '_blank')
                break;
            case 'whats-app':
                window.open('https://wa.me/+79990844641', '_blank')
                break;
            case 'line':
                window.open('https://line.me/ti/p/~meshalkin27', '_blank')
                break;
            case 'phone':
                window.open('tel:0610586031', '_blank')
                break;
            default:
                break;
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            backgroundColor: '#272727',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            boxSizing: 'border-box',
        }}>
            <div style={{position: 'fixed', top: '1rem', right: '1rem'}}>
                <img
                    src={`${import.meta.env.BASE_URL}${language === 'thai' ? 'en' : 'thai'}.png`}
                    alt="telegram"
                    style={{height: 40}}
                    onClick={() => setLanguage(prev => prev === 'en' ? 'thai' : 'en')}
                />
            </div>
            <h1 style={{color: "white", textAlign: 'center'}}>{content[language].title}</h1>
            <span style={{
                color: "white",
                fontSize: '1.3rem',
                fontWeight: 500,
                textAlign: 'center'
            }}>{content[language].description}</span>
            <span style={{
                color: "white",
                fontSize: '1.3rem',
                fontWeight: 500,
                textAlign: 'center'
            }}>{content[language].value}</span>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '3rem',
                width: '100%',
                gap: '2rem'
            }}>
                <img
                    src={`${import.meta.env.BASE_URL}tg.png`}
                    alt="telegram"
                    style={{height: 60}}
                    onClick={() => handleClick('telegram')}
                />
                <img
                    src={`${import.meta.env.BASE_URL}whats-app.png`}
                    alt="telegram"
                    style={{height: 60}}
                    onClick={() => handleClick('whats-app')}
                />
                {/*<img*/}
                {/*    src={`${import.meta.env.BASE_URL}line.png`}*/}
                {/*    alt="telegram"*/}
                {/*    style={{height: 75}}*/}
                {/*    onClick={() => handleClick('line')}*/}
                {/*/>*/}
                <img
                    src={`${import.meta.env.BASE_URL}phone.png`}
                    alt="telegram"
                    style={{height: 60, transform: 'rotate(-90deg)'}}
                    onClick={() => handleClick('phone')}
                />
            </div>
        </div>
    )
}
