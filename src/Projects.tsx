import { links } from './assets/links'
import github from './assets/images/github.svg'
import deploy from './assets/images/open-website-window-with-arrow-to-the-left-svgrepo-com.svg'

const Projects = () => {
	return (
		<>
			<h2 className='bold'>Projects</h2>
			{links.map((project) => (
				<div className='project-card' key={project.id}>
					<h3 className='project-title'>{project.title}</h3>
					<div className='img-and-links'>
						<img src={project.previewImg} className='preview-img' />
						<div className='project-links'>
							<a href={project.githubURL}>
								<img src={github} alt='To Github' className='svg' />
							</a>
							<a href={project.deployURL}>
								<img src={deploy} alt='To Deployed Version' className='svg' />
							</a>
						</div>
					</div>
					<p>{project.description}</p>
					<p className='stack'>{project.stack}</p>
				</div>
			))}
		</>
	)
}

export default Projects
