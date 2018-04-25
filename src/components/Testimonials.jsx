import React from 'react';

export default ({ testimonials }) => (
	<div>
		{testimonials.map((testimonial, index) => (
			<article key={index} className="message">
				<div className="message-body">
					{testimonial.quote}
					<br />
					<cite> – {testimonial.author}</cite>
				</div>
			</article>
		))}
	</div>
);
