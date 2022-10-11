import * as React from "react"
import ReactMarkdown from "react-markdown"
import List from "../list/list"
import Icon from "../icon/icon"
import './megamenu.scss'

const Megamenu = ({
	left,
	heading,
	cols
}) => {
	console.log(cols)
	return(
		<div className="megamenu">
			<div className="row">
				{left &&
					<div className="col-12 col-lg-4">
						<div className="description-content mx-4 mx-lg-0">
							{left.img &&
								<div className="ratio ratio-16x9 lightgrey-bg-a1 mb-4 rounded">
									<img className="rounded" src={left.img} alt={left.imgAlt}/>
								</div>
							}
							{left.text &&
								<ReactMarkdown>{left.text}</ReactMarkdown>
							}
						</div>
					</div>
				}
				<div className="col-12 col-lg-8">
					{heading &&
						<div className="row ps-3 me-1">
							<div className="link-list-wrapper">
								<ul className="link-list">
									<li className="it-more pb-3 mb-4 neutral-1-border-color-a3 border border-top-0 border-start-0 border-end-0">
										<a className="dropdown-item list-item medium mt-0 d-flex justify-content-between align-items-center" href={heading.url}>
											<span>{heading.label}</span>
											<Icon icon="sprites.svg#it-arrow-right" size="sm" color="primary"></Icon>
										</a>
									</li>
								</ul>
							</div>
						</div>
					}
					{cols &&
						<div className="row">
							{cols.map((col,index)=>{
								return(
									<div className="col-12 col-lg-6">
										<List key={"megalist-"+index} {...col}></List>
									</div>
								)
							})}
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Megamenu