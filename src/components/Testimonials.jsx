import React from 'react';

export default ({ testimonials }) => {
	return (
		<div>
			{testimonials.map((testimonial, index) => {
				return (
					<article key={index} className="message">
						<div className="message-body">
							{testimonial.quote}
							<br />
							<cite> – {testimonial.author}</cite>
						</div>
					</article>
				);
			})}
		</div>
	);
};
