
type AuthorAvatarProps = {
	verticalAlign: "center" | "start" | "end";
};

export default function AuthorAvatar({ verticalAlign }: AuthorAvatarProps) {

	const positionIcon = `flex items-center items-center`;

	console.log(verticalAlign);


	return (
		<div className={positionIcon}>
			<div className="w-20 h-20 rounded-full bg-gray-100">

			</div>
		</div>
	);

}
