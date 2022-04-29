@Iprice @Cypress @AutomationTests
Feature: IPrice Assessment Feature

    @Test1 @RUN
    Scenario: Navigate to IPrice Malaysia and perform validations
        Given I navigate to IPrice Home Page
        When I grab the list of stores in Find the Best Deals Online
        Then I count the list of stores in Find the Best Deals Online
        Then I count the list of items in Top Trending Products
        Then I validate each item in the list of Top Trending Products

    @Test2 @RUN
    Scenario: Navigate to IPrice Coupons Malaysia and perform validations
        Given I navigate to IPrice Coupons Page
        Then I validate that all urls in Top Stores are working
        Then I validate that all urls in Top Stores are redirecting to proper stores

    # This test below checks all links in the sitemap are and takes more time,
    # only recommended to execute if user has necessary time and willing to check all links in the Sitemap
    # @Test3 @NORUN @SITEMAP
    # Scenario: Validate all urls in Sitemap of IPrice Home Page are workings
    #     Given I navigate to IPrice Home Page
    #     Then I validate that all urls in Sitemap are working