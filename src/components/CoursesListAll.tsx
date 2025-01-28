"use client";
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  image: string;
  url: string;
  price: string;
  duration: string;
  level: string;
  category: string;
  tags: string[];
  rating: number;
}

export default function CoursesListAll() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCoursesCount, setVisibleCoursesCount] = useState<number>(10);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const categoryListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/course.json');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data: Course[] = await response.json();
        setCourses(data);

        const uniqueCategories = Array.from(new Set(data.map(course => course.category)));
        setCategories(uniqueCategories);

      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = selectedCategory
    ? courses.filter(course => course.category === selectedCategory)
    : courses;

  const coursesToDisplay = filteredCourses.slice(0, visibleCoursesCount);

  const loadMoreCourses = () => {
    setVisibleCoursesCount(prev => prev + 10);
  };

  const scrollLeft = () => {
    if (categoryListRef.current) {
      categoryListRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (categoryListRef.current) {
      categoryListRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const checkScrollButtons = () => {
    if (categoryListRef.current) {
      const isAtStart = categoryListRef.current.scrollLeft === 0;
      const isAtEnd = categoryListRef.current.scrollWidth === categoryListRef.current.scrollLeft + categoryListRef.current.clientWidth;

      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);
    }
  };

  useLayoutEffect(() => {
    checkScrollButtons();
  }, [categories]);

  useEffect(() => {
    if (categoryListRef.current) {
      categoryListRef.current.addEventListener('scroll', checkScrollButtons);
    }

    return () => {
      if (categoryListRef.current) {
        categoryListRef.current.removeEventListener('scroll', checkScrollButtons);
      }
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="relative">
          {canScrollLeft && (
            <div className="absolute top-0 left-0 z-10" onClick={scrollLeft}>
              <div className="relative h-10">
                <button className="absolute top-50 bottom-50 left-0 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow z-10">
                  <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
                </button>
                <div className="absolute top-0 left-0 w-20 h-10 bg-gradient-to-l from-transparent via-white to-white"></div>
              </div>
            </div>
          )}
          {canScrollRight && (
            <div className="absolute top-0 right-0 z-10" onClick={scrollRight}>
              <div className="relative h-10">
                <button className="absolute top-0 bottom-50 right-0 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow z-10">
                  <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
                </button>
                <div className="absolute top-0 right-0 w-20 h-10 bg-gradient-to-r from-transparent via-white to-white"></div>
              </div>
            </div>
          )}
          <ul ref={categoryListRef} className="list-none flex flex-nowrap gap-1 overflow-hidden border-b">
            <li
              onClick={() => setSelectedCategory(null)}
              className={`cursor-pointer border-b-2 border-transparent px-4 py-2 shrink-0 ${
                selectedCategory === null ? 'border-b-blue-700' : ''
              }`}
            >
              All Categories
            </li>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer border-b-2 border-transparent px-4 py-2 shrink-0 ${
                  selectedCategory === category ? 'border-b-blue-700' : ''
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-slate-100">
        <div className="container py-12 px-3 sm:px-0">
          <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 mb-6">
            {coursesToDisplay.map((course) => (
              <div className="border space-y-2 rounded-lg bg-white" key={course.id}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={800}
                  height={400}
                  className="w-full h-[175px] object-cover rounded-t-lg"
                />
                <div className="p-3 space-y-2">
                  <h2 className="text-base leading-none font-bold">{course.title}</h2>
                  <div className="text-slate-400">{course.instructor}</div>
                  <div className="text-base font-bold">{course.price}</div>
                </div>
              </div>
            ))}
          </div>
          {filteredCourses.length > visibleCoursesCount && (
            <div className="text-center">
              <button
                onClick={loadMoreCourses}
                className="bg-blue-500 text-white py-2 px-6 rounded-full"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
