'use client';

import Spline, { SplineEvent } from '@splinetool/react-spline';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	function onSplineMouseDown(e: SplineEvent) {
		console.log('button clicked', e);
		router.push('/test');
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl mb-4">SPLINE PAGE</h1>
			<Spline
				onSplineMouseDown={onSplineMouseDown}
				scene="https://prod.spline.design/txU4v9QQq6G7PnCi/scene.splinecode"
			/>
		</div>
	);
}
