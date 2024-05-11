import Specialist from './specialis.json'

const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<ul className="content-list">
					{
					Specialist.sections.map(section =>{
						
						return (
						<li className="content-list__item">
						<h3 className="title-3"><a href={section.link}>{section.heading}</a></h3>
						<p>{section.content}</p>
						</li>
						)
					})
					}
				</ul>
			</div>
		</main>
	);
}

export default Contacts;