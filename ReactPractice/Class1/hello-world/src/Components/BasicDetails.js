const Basicdetails = () => {
    let name = 'Abhishek Kshirsagar';
    let imageSrc = 'https://media.licdn.com/dms/image/C4E03AQF2SktnApF2gA/profile-displayphoto-shrink_400_400/0/1646983266855?e=1714003200&v=beta&t=nqJwPqov7rKmoRvhoruub9NjPffi71AHbG1yfc6020w';
    return (
        <div>
            <h1>{name}</h1>
            <img src={imageSrc} alt="abhi.jpg" />
        </div>
    )
}

export default Basicdetails;