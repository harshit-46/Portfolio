"use client";
import React from "react";
import { TracingBeam } from "../ui/beam";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <p className="text-xl mb-4">
                            {item.title}
                        </p>

                        <div className="text-sm prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <img
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="500"
                                    width="500"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Project 1",
        description: (
            <>
                <p>
                    Sit duis est minim proident non nisi velit non consectetur. Esse
                    adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
                    Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
                    incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
                    fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
                    nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
                    occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
                    officia sint labore. Tempor consectetur excepteur ut fugiat veniam
                    commodo et labore dolore commodo pariatur.
                </p>
                <p>
                    Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                    veniam in commodo id reprehenderit adipisicing. Proident duis
                    exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                </p>
                <p>
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                    reprehenderit deserunt amet laborum consequat adipisicing officia qui
                    irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                    Amet culpa officia aliquip deserunt veniam deserunt officia
                    adipisicing aliquip proident officia sunt.
                </p>
            </>
        )
    },
    {
        title: "Project 2",
        description: (
            <>
                <p>
                    Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                    deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                    non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                    sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                    velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                    commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
                </p>
                <p>
                    In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
                    veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
                    reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
                    cillum ut mollit.
                </p>
            </>
        )
    },
    {
        title: "Project 3",
        description: (
            <>
                <p>
                    Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                    deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                    non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                    sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                    velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                    commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
                </p>
            </>
        )
    },
];
