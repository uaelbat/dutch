.PHONY: create css

create:
	yarn create vite $(PROJ) --template react-ts

css:
	cd $(PROJ) && \
	yarn add -D tailwindcss postcss autoprefixer && \
	yarn tailwindcss init -p
