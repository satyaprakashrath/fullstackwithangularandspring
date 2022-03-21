	Release 2.0 Plan
======================================
1. Online shop template integration
2. Searach for products by category
3. Search for products by text box
4. Master/Detail view of products
5. Pagination supports for products
6. Add products to shopping cart
7. shopping cart checkout

=====================================

	Development process
	-------------------
2. Search for products by category

	1. Define Routes - Done
	2. Configure router based on defined routes - Done
	3. Define the Router Outlet
	4. Setup RouterLinks to pass category id param
	5. Enhance ProductListComponent to read id parama
	6. Modify Spring boot app - add new method for searching products  by category id
	7. Update Angular service to call new URL provided by Spring boot app
